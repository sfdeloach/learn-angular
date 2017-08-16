export class Address {
  street = '';
  city = '';
  state = '';
  zip = '';
}

export class Hero {
  id = 0;
  name = '';
  addresses: Address[];
}

export const heroes: Hero[] = [
  {
    id: 1,
    name: 'Wolverine',
    addresses: [
      { street: "123 Main Street", city: "Orlando", state: "FL", zip: "32801" },
      { street: "123 Main Street", city: "Orlando", state: "FL", zip: "32801" }
    ]
  },
  {
    id: 2,
    name: 'Magneto',
    addresses: [
      { street: "123 Main Street", city: "Orlando", state: "FL", zip: "32801" },
      { street: "123 Main Street", city: "Orlando", state: "FL", zip: "32801" }
    ]
  },
  {
    id: 3,
    name: 'Rogue',
    addresses: [
      { street: "123 Main Street", city: "Orlando", state: "FL", zip: "32801" },
      { street: "123 Main Street", city: "Orlando", state: "FL", zip: "32801" }
    ]
  }
];

export const states = [ 'CA', 'FL', 'TX', 'NY' ];
