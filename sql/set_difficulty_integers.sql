UPDATE mercy_parkour_codes
SET "Difficulty_Integer" = case
  when "Difficulty" = 'Beginner' THEN 1
  when "Difficulty" = 'Beginner / Easy' THEN 2
  when "Difficulty" = 'Easy' THEN 3
  when "Difficulty" = 'Easy / Low Intermediate' then 4
  when "Difficulty" = 'Low Intermediate' then 5
  when "Difficulty" = 'Low Intermediate / Intermediate' then 6
  when "Difficulty" = 'Intermediate' then 7
  when "Difficulty" = 'Intermediate / High Intermediate' then 8
  when "Difficulty" = 'High Intermediate' then 9
  when "Difficulty" = 'High Intermediate / Hard' then 10
  when "Difficulty" = 'Hard' then 11
  when "Difficulty" = 'Hard / Very Hard' then 12
  when "Difficulty" = 'Very Hard' then 13
  when "Difficulty" = 'Very Hard / Expert' then 14
  when "Difficulty" = 'Expert' then 15
  when "Difficulty" = 'Expert / Super Expert' then 16
  when "Difficulty" = 'Super Expert' then 17
  end
  WHERE "Difficulty" IN (
  'Beginner', 'Beginner / Easy', 'Easy', 'Easy / Low Intermediate',
  'Low Intermediate', 'Low Intermediate / Intermediate', 'Intermediate',
  'Intermediate / High Intermediate', 'High Intermediate', 'High Intermediate / Hard',
  'Hard', 'Hard / Very Hard', 'Very Hard', 'Very Hard / Expert',
  'Expert', 'Expert / Super Expert', 'Super Expert'
);