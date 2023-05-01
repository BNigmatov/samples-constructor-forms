import { Schema } from 'mongoose';

export const CrmAttrTestForm1Schema = {
  string1: {
    type: Schema.Types.String,
    required: true,
  },
  textarea1: {
    type: Schema.Types.String,
    required: true,
  },
  number1: {
    type: Schema.Types.Number,
  },
  date1: {
    type: Schema.Types.Date,
  },
  select1: {
    type: Schema.Types.String,
  },
  option1: {
    type: Schema.Types.String,
  },
  object1: {
    obj1_str1: {
      type: Schema.Types.String,
      required: true,
    },
    obj1_num1: {
      type: Schema.Types.Number,
    },
  },
  array1: [
    {
      arr1_str1: {
        type: Schema.Types.String,
        required: true,
      },
      arr1_num1: {
        type: Schema.Types.Number,
      },
    },
  ],
  join1: {
    type: Schema.Types.String,
  },
};
