import { TipoTransacao } from "./TipoTransacao.js";

export type Transacao = {
  tipoTransacao: TipoTransacao;
  valor: Number;
  data: Date;
}