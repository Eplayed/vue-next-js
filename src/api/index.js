import request from "@/utils/request";

// export const demo = () => {
//   return request({
//     url: "/demo",
//   });
// };

export function demo (params)  {
    return request({
      url: "/demo",
      params,
      method:'get'
    });
  };


export function demoPost (data)  {
    return request({
      url: "/create",
      data,
      method:'POST'
    });
  };

