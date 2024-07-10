drop table if exists categories cascade;

create table if not exists
  categories (
    category_id serial primary key,
    category_name varchar(300) not null
  );

insert into
 categories (category_name)
values
  ('Comedy'),
  ('Motorsport'),
  ('Music'),
  ('Drama'),
  ('Crime'),
  ('Scary');



drop table if exists programmes cascade;

create table if not exists
  programmes (
    programme_id serial primary key,
    programme_name varchar(300) not null,
    programme_image text not null,
    programme_description text not null,
    programme_category_id int not null,
    foreign key (programme_category_id) references categories(category_id)
  );

insert into
  programmes (programme_name, programme_image, programme_description, programme_category_id)
values
  ('Blackadder', 'https://th.bing.com/th/id/R.3383d92d26f82a5c9e445db183f15e47?rik=Jh8Q40Y5b0KdQw&riu=http%3a%2f%2fichef.bbci.co.uk%2fimages%2fic%2f1200x675%2fp036d0c1.jpg&ehk=ra4k0eVlM8Eppacb5OamgqTljr2YAsYikCdRE7A3Qi8%3d&risl=&pid=ImgRaw&r=0', 'Blackadder through the centuaries!', 1),
  ('Fawlty Towers', 'https://th.bing.com/th/id/OIP.PMrK2LUeF17ey-6rckhEtQHaEK?rs=1&pid=ImgDetMain', 'Basil Fawlty has a rather peculiar way of running his hotel.', 1),
  ('Top Gear', 'https://images-na.ssl-images-amazon.com/images/G/01/digital/video/hero/TVSeries/TopGearUK_3919500-TOPGEAR._V389396278_SX2160_.jpg', 'A bunch of presenters have adventures with cars.', 2),
  ('Super Rock', 'https://i.ytimg.com/vi/9bPWzW1o05E/hqdefault.jpg', 'An old music show that was the only way to listen to rock and metal back in the 90s', 3),
  ('The Crown', 'https://wp.stanforddaily.com/wp-content/uploads/2021/01/the-crown.png', 'History based drama with a liberal artistic licence.', 4),
  ('Law and Order: Special Victims Unit', 'https://th.bing.com/th/id/OIP.U9Kkh-mrevZjKaTSlqr0owHaE8?rs=1&pid=ImgDetMain', 'A gritty New York based classic cop show.', 5),
  ('Stranger Things', 'https://th.bing.com/th?id=OIF.KdNqKp9Gkj8F%2fI70rMwDAQ&rs=1&pid=ImgDetMain', 'A bunch of kids and adults find themselves drawn into a world of supernatural mysteries and events.', 6),
  ('Wednesday', 'https://th.bing.com/th/id/R.e6b0bace64173ec93f8c16a8e16daceb?rik=AiJYWx3mqrdq3Q&pid=ImgRaw&r=0', 'Wednesday Addams at bording school. Nothing more needs to be said.', 6);



drop table if exists seasons cascade;

create table if not exists
  seasons (
    season_id serial primary key,
    season_name varchar(300) not null,
    programme_id int not null,
    foreign key (programme_id) references programmes (programme_id)
  );

insert into
  seasons (season_name, programme_id)
values
  ('The Black Adder', 1),
  ('Blackadder II', 1),
  ('Blackadder the Third', 1),
  ('Blackadder Goes Fourth', 1),
  ('Season 1', 2),
  ('Season 2', 2);



drop table if exists episodes cascade;

create table if not exists
  episodes (
    episode_id serial primary key,
    episode_name varchar(300) not null,
    episode_image text not null,
    season_id int not null,
    foreign key (season_id) references seasons (season_id)
  );

insert into
  episodes (episode_name, episode_image, season_id)
values
  ('Bells', 'https://ichef.bbci.co.uk/news/1024/media/images/75431000/jpg/_75431769_mayall.jpg', 2),
  ('Head', 'https://s1.dmcdn.net/v/SoptK1ZlPvj1RJDQU/x720', 2),
  ('Potato', 'https://simkl.in/episodes/26/26121944701b2d86d_w.jpg', 2),
  ('Money', 'https://th.bing.com/th/id/R.6f0e9ec252b2840f9434baebe10a6cd2?rik=lr5RYxpPsFDn0w&riu=http%3a%2f%2fimages2.fanpop.com%2fimage%2fphotos%2f12000000%2fMoney-blackadder-12056272-480-365.jpg&ehk=TGGd5yi1hhDj4rwYgHTqAaCrMK33lUwNMm952qQSuYI%3d&risl=&pid=ImgRaw&r=0', 2),
  ('Beer', 'https://ichef.bbci.co.uk/images/ic/1200x675/p03946sp.jpg', 2),
  ('Chains', 'https://blackadderquotes.com/wp-content/uploads/2016/02/blackader-series-2-chains.jpg', 2),
  ('A Touch of Class', 'https://th.bing.com/th/id/R.6d34264d11fe8e8d6d501deafbd1706b?rik=jprk9W0smB2xDQ&riu=http%3a%2f%2fphotos1.blogger.com%2fblogger%2f2088%2f2881%2f1600%2fImage148.8.jpg&ehk=NHO0iI4qSilY%2fgmFMkpc4vhauQ6QvS9rqU2yw5nljMY%3d&risl=&pid=ImgRaw&r=0', 5),
  ('Waldorf Salad', 'https://th.bing.com/th/id/R.1911cff2869b7e201bc49f3c0d7f031a?rik=A570c%2fF1VuRIzw&pid=ImgRaw&r=0', 6);


  drop table if exists users cascade;

  create table if not exists
    users (
      id SERIAL PRIMARY KEY,
      clerk_id varchar(100) unique not null,
      username varchar(25) unique not null,
      bio varchar(255),
      location varchar(100),
      created_at TIMESTAMP WITH TIME ZONE not null DEFAULT CURRENT_TIMESTAMP
    );

insert into
  users (clerk_id, username, bio, location)
values('user_2ih0aL8yvJHJZuNZXCdTDN9OK94', 'Phil', 'test bio', 'Hull');



drop table if exists comments cascade;

create table if not exists
  comments (
    comment_id serial primary key,
    comment text not null,
    episode_id int not null,
    clerk_id varchar(100) not null,
    foreign key (episode_id) references episodes (episode_id),
    foreign key (clerk_id) references users (clerk_id)
  );

insert into
  comments (comment, episode_id, clerk_id )
values
  ('This episode is called Bells', 1, 'user_2ih0aL8yvJHJZuNZXCdTDN9OK94'),
  ('This episode is called Head', 2, 'user_2ih0aL8yvJHJZuNZXCdTDN9OK94'),
  ('This episode is called Potato', 3, 'user_2ih0aL8yvJHJZuNZXCdTDN9OK94'),
  ('This episode is called Money', 4, 'user_2ih0aL8yvJHJZuNZXCdTDN9OK94'),
  ('This episode is called Beer', 5, 'user_2ih0aL8yvJHJZuNZXCdTDN9OK94'),
  ('This episode is called Chains', 6, 'user_2ih0aL8yvJHJZuNZXCdTDN9OK94'),
  ('The first appearance of Flashheart', 1, 'user_2ih0aL8yvJHJZuNZXCdTDN9OK94'),
  ('This episode is called A Touch of Class', 7, 'user_2ih0aL8yvJHJZuNZXCdTDN9OK94'),
  ('This episode is called Waldorf Salad', 8, 'user_2ih0aL8yvJHJZuNZXCdTDN9OK94');


  drop table if exists follows;
  
  create table if not exists
    follows (
      id SERIAL PRIMARY KEY,
      follower_id INT references users(id),
      followee_id INT references users(id),
      unique(follower_id, followee_id)
    )