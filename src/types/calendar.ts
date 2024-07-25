export type calendar = {
  CategoryName: string;
  ContentsName: string;
  ContentsIcon: string;
  MinItemLevel: number;
  StartTimes: string[];
  Location: string;
  RewardItems: [
    {
      ItemLevel: 0;
      Items: [
        {
          Name: string;
          Icon: string;
          Grade: string;
          StartTimes: string[];
        }
      ];
    }
  ];
};
