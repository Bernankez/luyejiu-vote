const baseUrl = "https://api.live.bilibili.com/";

// TODO request forward using Vercel Serverless

export function getRoomInfo(roomId: number) {
  return request(`${baseUrl}room/v1/Room/get_info`, {
    method: "GET",
    query: {
      room_id: roomId,
    },
  });
}
