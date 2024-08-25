function status(request, response) {
  response.status(200).json({ chave: "endoint status de teste" });
}

export default status;
