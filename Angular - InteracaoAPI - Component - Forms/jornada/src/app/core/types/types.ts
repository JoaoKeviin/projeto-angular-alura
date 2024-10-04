export interface promocao{
    id: number
    destino: String
    imagem: String
    preco: number 
}
//depois de fazer essa forma de interface da promoção, posso pedir agora pro angular gerar serviço para
// fazer essa camada de comunicação com a nossa aplicação e o backend

export interface estados{
    id: number
    nome: string
    sigla: string
}