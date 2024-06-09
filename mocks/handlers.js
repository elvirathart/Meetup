import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://pokeapi.co/api/v2/pokemon/pikachu", (req, res, ctx) => {
    return HttpResponse.json({
      types: [
        {
          slot: 1,
          type: { name: "fairy", url: "https://pokeapi.co/api/v2/type/13/" },
        },
      ],
      weight: 60,
    });
  }),
];
