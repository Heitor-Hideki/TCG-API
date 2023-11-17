import { Card } from "../../DTO/cardModel";

interface Request {
  name: string;
}

class DeleteCardService {
  public execute({
    name
  }: Request) {
    const card = this.locate(name)
    card.delete();
  }

  private locate(name: string): Card {
    const card = new Card(name);

    return card
  }
}

export { DeleteCardService }
