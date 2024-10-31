FROM golang AS builder

WORKDIR /app

COPY go.mod ./
RUN go mod download

COPY *.go ./
RUN go build -a -gcflags=all="-l -B" -ldflags="-w -s" -o fullcycle main.go

FROM scratch
WORKDIR /
COPY --from=builder /app/fullcycle /fullcycle

CMD ["/fullcycle"]