import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faBed,
  faBuilding,
  faHouse,
  faHouseFlag,
  faMap,
} from '@fortawesome/free-solid-svg-icons';

interface iAppProps {
  name: string;
  title: string;
  icon: IconDefinition;
  description: string;
  id: number;
}

export const categoryItems: iAppProps[] = [
  {
    id: 0,
    name: "commercial",
    description: "This property is commercial.",
    title: "Commercial",
    icon: faBuilding,
  },
  {
    id: 1,
    name: "hostels",
    description: "This property is a hostel.",
    title: "Hostels",
    icon: faBed,
  },
  {
    id: 2,
    name: "residential",
    description: "This property is residential.",
    title: "Residential",
    icon: faHouseFlag,
  },
  {
    id: 3,
    name: "land",
    description: "This property is land.",
    title: "Land",
    icon: faMap,
  },
  {
    id: 4,
    name: "house",
    description: "This property is a house.",
    title: "House",
    icon: faHouse,
  },
];
