import { createContext } from "react";

const CurrentTemperatureUnitContext = createContext(); //createContext() returns an object with two properties: Provider and Consumer that we can use to pass data to any component in the component tree. Provider is a component that allows us to pass data to any component in the component tree. Consumer is a component that allows us to access the data passed to it by the Provider component. 

export { CurrentTemperatureUnitContext };
