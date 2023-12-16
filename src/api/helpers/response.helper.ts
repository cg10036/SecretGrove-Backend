class HttpResponse {
  status: number;
  data: string | object;
  constructor(status, data) {
    this.status = status;
    this.data = data;
  }
}

export { HttpResponse };
