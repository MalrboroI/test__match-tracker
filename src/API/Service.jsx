const baseUrl = "https://app.ftoyd.com/fronttemp-service/fronttemp";

export class ServiceApi {
  static getMatchList() {
    return fetch(baseUrl, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => data.data.matches);
  }
}