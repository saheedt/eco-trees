import Axios, { Method } from "axios";

// import { HTTP_STATUS_CODES } from "../utils";

interface HttpRequestInput {
  method: Method;
  url: string;
  headers?: { [key: string]: any };
  body?: any;
  params?: any;
}

type requestResponse = [any | undefined, { error: any } | undefined];

const request = async (
  options: HttpRequestInput
): Promise<requestResponse> => {
  try {
    const response = await Axios(options.url, {
      method: options.method,
      headers: options.headers,
    //   searchParams: options.params,
      responseType: "json",
    });
      console.log("response: ", response);
    return [response.data, undefined];
  } catch (error) {
      console.log('error: ', error);
    if (error) {
    //   const errorBody = error.response.body;
      return [
        undefined,
        {
          error,
        },
      ];
    }
    return [
      undefined,
      {
        error: "An error occured",
      },
    ];
  }
};

export default request
