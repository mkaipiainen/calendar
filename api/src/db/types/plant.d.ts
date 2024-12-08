import { ColumnType, Generated, GeneratedAlways, Selectable } from 'kysely';
import { Image } from './image';

export type PlantTable = {
  id: GeneratedAlways<string>;
  name: string;
  watering_frequency: number | undefined;
  date_created: ColumnType<Date, never, never>;
  date_updated: ColumnType<Date, never, never>;
  last_watered: ColumnType<Date | undefined, string | undefined, string | undefined>;
  description: string | undefined;
};

export type Plant = Selectable<PlantTable> & {
  tags: Tag[];
  images: Image[];
};
