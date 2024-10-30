# desafio-go

<b>Criar uma aplicação em GO que demonstre "Full Cycle Rocks!", deve ter um tamanho < 2 Mb.</b>

Para baixar a imagem:

<i>docker pull mreno14/desafio-go</i>

Para compilar com um tamanho reduzido utilizei o comando

<i>go build -a -gcflags=all="-l -B" -ldflags="-w -s"</i>

Ao executar o docker run, aparece como resultado a imagem:

![resultado-desafio-go](https://github.com/user-attachments/assets/a385052d-c910-4853-8321-75b8887b2b30)

Conforme podemos ver, a imagem ficou com um tamanho < 2 MB:

![resultado-size-desafio-go](https://github.com/user-attachments/assets/697858f6-1e02-44f9-b6ff-c82b4f002c6b)