import * as Dialog from "@radix-ui/react-dialog";
import {
  Input,
  StyledClose,
  StyledContent,
  StyledOverlay,
  SubmitButton,
} from "./styles";
import { RiCloseCircleFill } from "react-icons/ri";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useState, ReactNode } from "react";

interface ContactDialogProps {
  children: ReactNode;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function ContactDialog({ children }: ContactDialogProps) {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [isLoading, setIsLoading] = useState(false);

  async function handleSendMessage(data: FormData) {
    try {
      setIsLoading(true);
      const messageData = {
        embeds: [
          {
            title: "Nova mensagem",
            color: 15548997,
            thumbnail: {
              url: "https://i.imgur.com/gXbduOH.png",
            },
            fields: [
              {
                name: "Nome",
                value: data.name,
                inline: true,
              },
              {
                name: "E-mail",
                value: data.email,
                inline: true,
              },
              {
                name: "Mensagem",
                value: data.message,
              },
            ],
          },
        ],
      };
      await axios.post(import.meta.env.VITE_WEBHOOK_URL, messageData);
      toast.success("Obrigada por entrar em contato!");
      reset();
    } catch {
      toast.error("Ocorreu um erro, tente novamente!");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <StyledOverlay />
        <StyledContent>
          <Dialog.Title>Envie sua mensagem</Dialog.Title>
          <StyledClose>
            <RiCloseCircleFill />
          </StyledClose>
          <form onSubmit={handleSubmit(handleSendMessage)}>
            <Input
              placeholder="Seu nome"
              {...register("name", { required: true })}
            />
            <Input
              placeholder="E-mail"
              type="email"
              {...register("email", { required: true })}
            />
            <Input
              as="textarea"
              placeholder="Sua mensagem"
              {...register("message", { required: true })}
            />
            <SubmitButton disabled={isLoading} variant="coral" type="submit">
              {isLoading ? "Enviando..." : "Enviar"}
            </SubmitButton>
          </form>
        </StyledContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
