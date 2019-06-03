import React from "react";
import Hello from "../app/components/Hello";

import Enzyme, { mount, shallow } from "enzyme";

import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Añadiendo pruebas unitarias a React", () => {
  test("verificando texto de los props", () => {
    const data = { title: "OscarRaygoza" };
    const wrapper = mount(<Hello title={data.title} />);
    const p = wrapper.find("p");
    expect(p.text()).toBe("Created by: OscarRaygoza");
  });
});
