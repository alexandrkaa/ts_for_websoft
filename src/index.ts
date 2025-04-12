enum Locales {
  ru = "ru",
  en = "en",
}

export type TObject = {
  [key: string]: string | number;
};

function method(argument: string = "default string") {
  alert(argument);
}

method();

method(Locales.en);

const stringState = "interpolated";
alert(`I insisted that substring be ${stringState}`);

const a: number = 1112;
const b = a + 1;
alert(b);

const str: string = "qqq";
alert(str);

const o: TObject = {
  a: 1,
  b: 2,
};

const fn = (prop: string | number) => {
  alert(prop);
};

fn(o.a);

const cl = (data: CollaboratorDocument | number) => {
  if (typeof data !== "number") {
    alert(data.TopElem.birth_date);
  }
};

cl(111);
