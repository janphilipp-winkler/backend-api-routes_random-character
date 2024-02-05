import Chance from "chance";

export default function handler(request, response) {
  const chance = new Chance();

  const character = {
    firstName: chance.first(),
    lastName: chance.last(),
    email: chance.email(),
    company: chance.company(),
    birthday: chance.birthday({ string: true, american: false }),
  };

  if (request.method === "GET") {
    response.status(200).json(character);
    return;
  }
  response.status(405).json({ message: "forbidden method" });
}
