import { Transacao } from "./Transacao";

export type GrupoTransacao = {
  label: string;
  transacoes: Transacao[];
}