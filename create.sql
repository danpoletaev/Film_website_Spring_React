create table film (id bigint not null, dvd_release varchar(255), box_office varchar(255), budget varchar(255), composer varchar(255), country varchar(255), description varchar(255), duration varchar(255), genre varchar(255), motto varchar(255), name varchar(255), operator varchar(255), picture_url varchar(255), producer varchar(255), rating double precision not null, screenwriter varchar(255), year varchar(255), youtube_video_id varchar(255), primary key (id)) engine=MyISAM
create table hibernate_sequence (next_val bigint) engine=MyISAM
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
create table review (id bigint not null, film_id bigint, positive bit not null, rating double precision not null, review varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table role (id bigint not null auto_increment, name varchar(255), primary key (id)) engine=MyISAM
create table user (id bigint not null auto_increment, email varchar(255), password varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table users_roles (user_id bigint not null, role_id bigint not null) engine=MyISAM
alter table user add constraint UKob8kqyqqgmefl0aco34akdtpe unique (email)
alter table users_roles add constraint FKt4v0rrweyk393bdgt107vdx0x foreign key (role_id) references role (id)
alter table users_roles add constraint FKgd3iendaoyh04b95ykqise6qh foreign key (user_id) references user (id)
create table film (id bigint not null, dvd_release varchar(255), box_office varchar(255), budget varchar(255), composer varchar(255), country varchar(255), description varchar(255), duration varchar(255), genre varchar(255), motto varchar(255), name varchar(255), operator varchar(255), picture_url varchar(255), producer varchar(255), rating double precision not null, screenwriter varchar(255), year varchar(255), youtube_video_id varchar(255), primary key (id)) engine=MyISAM
create table hibernate_sequence (next_val bigint) engine=MyISAM
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
create table review (id bigint not null, film_id bigint, positive bit not null, rating double precision not null, review varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table role (id bigint not null auto_increment, name varchar(255), primary key (id)) engine=MyISAM
create table user (id bigint not null auto_increment, email varchar(255), password varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table users_roles (user_id bigint not null, role_id bigint not null) engine=MyISAM
alter table user add constraint UKob8kqyqqgmefl0aco34akdtpe unique (email)
alter table users_roles add constraint FKt4v0rrweyk393bdgt107vdx0x foreign key (role_id) references role (id)
alter table users_roles add constraint FKgd3iendaoyh04b95ykqise6qh foreign key (user_id) references user (id)
create table film (id bigint not null, dvd_release varchar(255), box_office varchar(255), budget varchar(255), composer varchar(255), country varchar(255), description varchar(255), duration varchar(255), genre varchar(255), motto varchar(255), name varchar(255), operator varchar(255), picture_url varchar(255), producer varchar(255), rating double precision not null, screenwriter varchar(255), year varchar(255), youtube_video_id varchar(255), primary key (id)) engine=MyISAM
create table hibernate_sequence (next_val bigint) engine=MyISAM
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
create table review (id bigint not null, film_id bigint, positive bit not null, rating double precision not null, review varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table role (id bigint not null auto_increment, name varchar(255), primary key (id)) engine=MyISAM
create table user (id bigint not null auto_increment, email varchar(255), password varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table users_roles (user_id bigint not null, role_id bigint not null) engine=MyISAM
alter table user add constraint UKob8kqyqqgmefl0aco34akdtpe unique (email)
alter table users_roles add constraint FKt4v0rrweyk393bdgt107vdx0x foreign key (role_id) references role (id)
alter table users_roles add constraint FKgd3iendaoyh04b95ykqise6qh foreign key (user_id) references user (id)
create table film (id bigint not null, dvd_release varchar(255), box_office varchar(255), budget varchar(255), composer varchar(255), country varchar(255), description varchar(255), duration varchar(255), genre varchar(255), motto varchar(255), name varchar(255), operator varchar(255), picture_url varchar(255), producer varchar(255), rating double precision not null, screenwriter varchar(255), year varchar(255), youtube_video_id varchar(255), primary key (id)) engine=MyISAM
create table hibernate_sequence (next_val bigint) engine=MyISAM
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
create table review (id bigint not null, film_id bigint, positive bit not null, rating double precision not null, review varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table role (id bigint not null auto_increment, name varchar(255), primary key (id)) engine=MyISAM
create table user (id bigint not null auto_increment, email varchar(255), password varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table users_roles (user_id bigint not null, role_id bigint not null) engine=MyISAM
alter table user add constraint UKob8kqyqqgmefl0aco34akdtpe unique (email)
alter table users_roles add constraint FKt4v0rrweyk393bdgt107vdx0x foreign key (role_id) references role (id)
alter table users_roles add constraint FKgd3iendaoyh04b95ykqise6qh foreign key (user_id) references user (id)
create table film (id bigint not null, dvd_release varchar(255), box_office varchar(255), budget varchar(255), composer varchar(255), country varchar(255), description varchar(255), duration varchar(255), genre varchar(255), motto varchar(255), name varchar(255), operator varchar(255), picture_url varchar(255), producer varchar(255), rating double precision not null, screenwriter varchar(255), year varchar(255), youtube_video_id varchar(255), primary key (id)) engine=MyISAM
create table hibernate_sequence (next_val bigint) engine=MyISAM
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
create table review (id bigint not null, film_id bigint, positive bit not null, rating double precision not null, review varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table role (id bigint not null auto_increment, name varchar(255), primary key (id)) engine=MyISAM
create table user (id bigint not null auto_increment, email varchar(255), password varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table users_roles (user_id bigint not null, role_id bigint not null) engine=MyISAM
alter table user add constraint UKob8kqyqqgmefl0aco34akdtpe unique (email)
alter table users_roles add constraint FKt4v0rrweyk393bdgt107vdx0x foreign key (role_id) references role (id)
alter table users_roles add constraint FKgd3iendaoyh04b95ykqise6qh foreign key (user_id) references user (id)
create table film (id bigint not null, dvd_release varchar(255), box_office varchar(255), budget varchar(255), composer varchar(255), country varchar(255), description varchar(255), duration varchar(255), genre varchar(255), motto varchar(255), name varchar(255), operator varchar(255), picture_url varchar(255), producer varchar(255), rating double precision not null, screenwriter varchar(255), year varchar(255), youtube_video_id varchar(255), primary key (id)) engine=MyISAM
create table hibernate_sequence (next_val bigint) engine=MyISAM
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
create table review (id bigint not null, film_id bigint, positive bit not null, rating double precision not null, review varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table role (id bigint not null auto_increment, name varchar(255), primary key (id)) engine=MyISAM
create table user (id bigint not null auto_increment, email varchar(255), password varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table users_roles (user_id bigint not null, role_id bigint not null) engine=MyISAM
alter table user add constraint UKob8kqyqqgmefl0aco34akdtpe unique (email)
alter table users_roles add constraint FKt4v0rrweyk393bdgt107vdx0x foreign key (role_id) references role (id)
alter table users_roles add constraint FKgd3iendaoyh04b95ykqise6qh foreign key (user_id) references user (id)
create table film (id bigint not null, dvd_release varchar(255), box_office varchar(255), budget varchar(255), composer varchar(255), country varchar(255), description varchar(255), duration varchar(255), genre varchar(255), motto varchar(255), name varchar(255), operator varchar(255), picture_url varchar(255), producer varchar(255), rating double precision not null, screenwriter varchar(255), year varchar(255), youtube_video_id varchar(255), primary key (id)) engine=MyISAM
create table hibernate_sequence (next_val bigint) engine=MyISAM
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
create table review (id bigint not null, film_id bigint, positive bit not null, rating double precision not null, review varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table role (id bigint not null auto_increment, name varchar(255), primary key (id)) engine=MyISAM
create table user (id bigint not null auto_increment, email varchar(255), password varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table users_roles (user_id bigint not null, role_id bigint not null) engine=MyISAM
alter table user add constraint UKob8kqyqqgmefl0aco34akdtpe unique (email)
alter table users_roles add constraint FKt4v0rrweyk393bdgt107vdx0x foreign key (role_id) references role (id)
alter table users_roles add constraint FKgd3iendaoyh04b95ykqise6qh foreign key (user_id) references user (id)
create table film (id bigint not null, dvd_release varchar(255), box_office varchar(255), budget varchar(255), composer varchar(255), country varchar(255), description varchar(255), duration varchar(255), genre varchar(255), motto varchar(255), name varchar(255), operator varchar(255), picture_url varchar(255), producer varchar(255), rating double precision not null, screenwriter varchar(255), year varchar(255), youtube_video_id varchar(255), primary key (id)) engine=MyISAM
create table hibernate_sequence (next_val bigint) engine=MyISAM
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
create table review (id bigint not null, film_id bigint, positive bit not null, rating double precision not null, review varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table role (id bigint not null auto_increment, name varchar(255), primary key (id)) engine=MyISAM
create table user (id bigint not null auto_increment, email varchar(255), password varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table users_roles (user_id bigint not null, role_id bigint not null) engine=MyISAM
alter table user add constraint UKob8kqyqqgmefl0aco34akdtpe unique (email)
alter table users_roles add constraint FKt4v0rrweyk393bdgt107vdx0x foreign key (role_id) references role (id)
alter table users_roles add constraint FKgd3iendaoyh04b95ykqise6qh foreign key (user_id) references user (id)
create table film (id bigint not null, dvd_release varchar(255), box_office varchar(255), budget varchar(255), composer varchar(255), country varchar(255), description varchar(255), duration varchar(255), genre varchar(255), motto varchar(255), name varchar(255), operator varchar(255), picture_url varchar(255), producer varchar(255), rating double precision not null, screenwriter varchar(255), year varchar(255), youtube_video_id varchar(255), primary key (id)) engine=MyISAM
create table hibernate_sequence (next_val bigint) engine=MyISAM
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
create table review (id bigint not null, film_id bigint, positive bit not null, rating double precision not null, review varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table role (id bigint not null auto_increment, name varchar(255), primary key (id)) engine=MyISAM
create table user (id bigint not null auto_increment, email varchar(255), password varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table users_roles (user_id bigint not null, role_id bigint not null) engine=MyISAM
alter table user add constraint UKob8kqyqqgmefl0aco34akdtpe unique (email)
alter table users_roles add constraint FKt4v0rrweyk393bdgt107vdx0x foreign key (role_id) references role (id)
alter table users_roles add constraint FKgd3iendaoyh04b95ykqise6qh foreign key (user_id) references user (id)
create table film (id bigint not null, dvd_release varchar(255), box_office varchar(255), budget varchar(255), composer varchar(255), country varchar(255), description varchar(255), duration varchar(255), genre varchar(255), motto varchar(255), name varchar(255), operator varchar(255), picture_url varchar(255), producer varchar(255), rating double precision not null, screenwriter varchar(255), year varchar(255), youtube_video_id varchar(255), primary key (id)) engine=MyISAM
create table hibernate_sequence (next_val bigint) engine=MyISAM
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
create table review (id bigint not null, film_id bigint, positive bit not null, rating double precision not null, review varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table role (id bigint not null auto_increment, name varchar(255), primary key (id)) engine=MyISAM
create table user (id bigint not null auto_increment, email varchar(255), password varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table users_roles (user_id bigint not null, role_id bigint not null) engine=MyISAM
alter table user add constraint UKob8kqyqqgmefl0aco34akdtpe unique (email)
alter table users_roles add constraint FKt4v0rrweyk393bdgt107vdx0x foreign key (role_id) references role (id)
alter table users_roles add constraint FKgd3iendaoyh04b95ykqise6qh foreign key (user_id) references user (id)
create table film (id bigint not null, dvd_release varchar(255), box_office varchar(255), budget varchar(255), composer varchar(255), country varchar(255), description varchar(255), duration varchar(255), genre varchar(255), motto varchar(255), name varchar(255), operator varchar(255), picture_url varchar(255), producer varchar(255), rating double precision not null, screenwriter varchar(255), year varchar(255), youtube_video_id varchar(255), primary key (id)) engine=MyISAM
create table hibernate_sequence (next_val bigint) engine=MyISAM
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
create table review (id bigint not null, film_id bigint, positive bit not null, rating double precision not null, review varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table role (id bigint not null auto_increment, name varchar(255), primary key (id)) engine=MyISAM
create table user (id bigint not null auto_increment, email varchar(255), password varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table users_roles (user_id bigint not null, role_id bigint not null) engine=MyISAM
alter table user add constraint UKob8kqyqqgmefl0aco34akdtpe unique (email)
alter table users_roles add constraint FKt4v0rrweyk393bdgt107vdx0x foreign key (role_id) references role (id)
alter table users_roles add constraint FKgd3iendaoyh04b95ykqise6qh foreign key (user_id) references user (id)
create table film (id bigint not null, dvd_release varchar(255), box_office varchar(255), budget varchar(255), composer varchar(255), country varchar(255), description varchar(255), duration varchar(255), genre varchar(255), motto varchar(255), name varchar(255), operator varchar(255), picture_url varchar(255), producer varchar(255), rating double precision not null, screenwriter varchar(255), year varchar(255), youtube_video_id varchar(255), primary key (id)) engine=MyISAM
create table hibernate_sequence (next_val bigint) engine=MyISAM
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
create table review (id bigint not null, film_id bigint, positive bit not null, rating double precision not null, review varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table role (id bigint not null auto_increment, name varchar(255), primary key (id)) engine=MyISAM
create table user (id bigint not null auto_increment, email varchar(255), password varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table users_roles (user_id bigint not null, role_id bigint not null) engine=MyISAM
alter table user add constraint UKob8kqyqqgmefl0aco34akdtpe unique (email)
alter table users_roles add constraint FKt4v0rrweyk393bdgt107vdx0x foreign key (role_id) references role (id)
alter table users_roles add constraint FKgd3iendaoyh04b95ykqise6qh foreign key (user_id) references user (id)
create table film (id bigint not null, dvd_release varchar(255), box_office varchar(255), budget varchar(255), composer varchar(255), country varchar(255), description varchar(255), duration varchar(255), genre varchar(255), motto varchar(255), name varchar(255), operator varchar(255), picture_url varchar(255), producer varchar(255), rating double precision not null, screenwriter varchar(255), year varchar(255), youtube_video_id varchar(255), primary key (id)) engine=MyISAM
create table hibernate_sequence (next_val bigint) engine=MyISAM
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
create table review (id bigint not null, film_id bigint, positive bit not null, rating double precision not null, review varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table role (id bigint not null auto_increment, name varchar(255), primary key (id)) engine=MyISAM
create table user (id bigint not null auto_increment, email varchar(255), password varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table users_roles (user_id bigint not null, role_id bigint not null) engine=MyISAM
alter table user add constraint UKob8kqyqqgmefl0aco34akdtpe unique (email)
alter table users_roles add constraint FKt4v0rrweyk393bdgt107vdx0x foreign key (role_id) references role (id)
alter table users_roles add constraint FKgd3iendaoyh04b95ykqise6qh foreign key (user_id) references user (id)
create table film (id bigint not null, dvd_release varchar(255), box_office varchar(255), budget varchar(255), composer varchar(255), country varchar(255), description varchar(255), duration varchar(255), genre varchar(255), motto varchar(255), name varchar(255), operator varchar(255), picture_url varchar(255), producer varchar(255), rating double precision not null, screenwriter varchar(255), year varchar(255), youtube_video_id varchar(255), primary key (id)) engine=MyISAM
create table hibernate_sequence (next_val bigint) engine=MyISAM
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
create table review (id bigint not null, film_id bigint, positive bit not null, rating double precision not null, review varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table role (id bigint not null auto_increment, name varchar(255), primary key (id)) engine=MyISAM
create table user (id bigint not null auto_increment, email varchar(255), password varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table users_roles (user_id bigint not null, role_id bigint not null) engine=MyISAM
alter table user add constraint UKob8kqyqqgmefl0aco34akdtpe unique (email)
alter table users_roles add constraint FKt4v0rrweyk393bdgt107vdx0x foreign key (role_id) references role (id)
alter table users_roles add constraint FKgd3iendaoyh04b95ykqise6qh foreign key (user_id) references user (id)
create table film (id bigint not null, dvd_release varchar(255), box_office varchar(255), budget varchar(255), composer varchar(255), country varchar(255), description varchar(255), duration varchar(255), genre varchar(255), motto varchar(255), name varchar(255), operator varchar(255), picture_url varchar(255), producer varchar(255), rating double precision not null, screenwriter varchar(255), year varchar(255), youtube_video_id varchar(255), primary key (id)) engine=MyISAM
create table hibernate_sequence (next_val bigint) engine=MyISAM
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
create table review (id bigint not null, film_id bigint, positive bit not null, rating double precision not null, review varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table role (id bigint not null auto_increment, name varchar(255), primary key (id)) engine=MyISAM
create table user (id bigint not null auto_increment, email varchar(255), password varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table users_roles (user_id bigint not null, role_id bigint not null) engine=MyISAM
alter table user add constraint UKob8kqyqqgmefl0aco34akdtpe unique (email)
alter table users_roles add constraint FKt4v0rrweyk393bdgt107vdx0x foreign key (role_id) references role (id)
alter table users_roles add constraint FKgd3iendaoyh04b95ykqise6qh foreign key (user_id) references user (id)
create table film (id bigint not null, dvd_release varchar(255), box_office varchar(255), budget varchar(255), composer varchar(255), country varchar(255), description varchar(255), duration varchar(255), genre varchar(255), motto varchar(255), name varchar(255), operator varchar(255), picture_url varchar(255), producer varchar(255), rating double precision not null, screenwriter varchar(255), year varchar(255), youtube_video_id varchar(255), primary key (id)) engine=MyISAM
create table hibernate_sequence (next_val bigint) engine=MyISAM
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
create table review (id bigint not null, film_id bigint, positive bit not null, rating double precision not null, review varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table role (id bigint not null auto_increment, name varchar(255), primary key (id)) engine=MyISAM
create table user (id bigint not null auto_increment, email varchar(255), password varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table users_roles (user_id bigint not null, role_id bigint not null) engine=MyISAM
alter table user add constraint UKob8kqyqqgmefl0aco34akdtpe unique (email)
alter table users_roles add constraint FKt4v0rrweyk393bdgt107vdx0x foreign key (role_id) references role (id)
alter table users_roles add constraint FKgd3iendaoyh04b95ykqise6qh foreign key (user_id) references user (id)
create table film (id bigint not null, dvd_release varchar(255), box_office varchar(255), budget varchar(255), composer varchar(255), country varchar(255), description varchar(255), duration varchar(255), genre varchar(255), motto varchar(255), name varchar(255), operator varchar(255), picture_url varchar(255), producer varchar(255), rating double precision not null, screenwriter varchar(255), year varchar(255), youtube_video_id varchar(255), primary key (id)) engine=MyISAM
create table hibernate_sequence (next_val bigint) engine=MyISAM
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
create table review (id bigint not null, film_id bigint, positive bit not null, rating double precision not null, review varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table role (id bigint not null auto_increment, name varchar(255), primary key (id)) engine=MyISAM
create table user (id bigint not null auto_increment, email varchar(255), password varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table users_roles (user_id bigint not null, role_id bigint not null) engine=MyISAM
alter table user add constraint UKob8kqyqqgmefl0aco34akdtpe unique (email)
alter table users_roles add constraint FKt4v0rrweyk393bdgt107vdx0x foreign key (role_id) references role (id)
alter table users_roles add constraint FKgd3iendaoyh04b95ykqise6qh foreign key (user_id) references user (id)
create table film (id bigint not null, dvd_release varchar(255), box_office varchar(255), budget varchar(255), composer varchar(255), country varchar(255), description varchar(255), duration varchar(255), genre varchar(255), motto varchar(255), name varchar(255), operator varchar(255), picture_url varchar(255), producer varchar(255), rating double precision not null, screenwriter varchar(255), year varchar(255), youtube_video_id varchar(255), primary key (id)) engine=MyISAM
create table hibernate_sequence (next_val bigint) engine=MyISAM
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
create table review (id bigint not null, film_id bigint, positive bit not null, rating double precision not null, review varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table role (id bigint not null auto_increment, name varchar(255), primary key (id)) engine=MyISAM
create table user (id bigint not null auto_increment, email varchar(255), password varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table users_roles (user_id bigint not null, role_id bigint not null) engine=MyISAM
alter table user add constraint UKob8kqyqqgmefl0aco34akdtpe unique (email)
alter table users_roles add constraint FKt4v0rrweyk393bdgt107vdx0x foreign key (role_id) references role (id)
alter table users_roles add constraint FKgd3iendaoyh04b95ykqise6qh foreign key (user_id) references user (id)
create table film (id bigint not null, dvd_release varchar(255), box_office varchar(255), budget varchar(255), composer varchar(255), country varchar(255), description varchar(255), duration varchar(255), genre varchar(255), motto varchar(255), name varchar(255), operator varchar(255), picture_url varchar(255), producer varchar(255), rating double precision not null, screenwriter varchar(255), year varchar(255), youtube_video_id varchar(255), primary key (id)) engine=MyISAM
create table hibernate_sequence (next_val bigint) engine=MyISAM
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
create table review (id bigint not null, film_id bigint, positive bit not null, rating double precision not null, review varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table role (id bigint not null auto_increment, name varchar(255), primary key (id)) engine=MyISAM
create table user (id bigint not null auto_increment, email varchar(255), password varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table users_roles (user_id bigint not null, role_id bigint not null) engine=MyISAM
alter table user add constraint UKob8kqyqqgmefl0aco34akdtpe unique (email)
alter table users_roles add constraint FKt4v0rrweyk393bdgt107vdx0x foreign key (role_id) references role (id)
alter table users_roles add constraint FKgd3iendaoyh04b95ykqise6qh foreign key (user_id) references user (id)
create table film (id bigint not null, dvd_release varchar(255), box_office varchar(255), budget varchar(255), composer varchar(255), country varchar(255), description varchar(255), duration varchar(255), genre varchar(255), motto varchar(255), name varchar(255), operator varchar(255), picture_url varchar(255), producer varchar(255), rating double precision not null, screenwriter varchar(255), year varchar(255), youtube_video_id varchar(255), primary key (id)) engine=MyISAM
create table hibernate_sequence (next_val bigint) engine=MyISAM
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
create table review (id bigint not null, film_id bigint, positive bit not null, rating double precision not null, review varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table role (id bigint not null auto_increment, name varchar(255), primary key (id)) engine=MyISAM
create table user (id bigint not null auto_increment, email varchar(255), password varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table users_roles (user_id bigint not null, role_id bigint not null) engine=MyISAM
alter table user add constraint UKob8kqyqqgmefl0aco34akdtpe unique (email)
alter table users_roles add constraint FKt4v0rrweyk393bdgt107vdx0x foreign key (role_id) references role (id)
alter table users_roles add constraint FKgd3iendaoyh04b95ykqise6qh foreign key (user_id) references user (id)
create table film (id bigint not null, dvd_release varchar(255), box_office varchar(255), budget varchar(255), composer varchar(255), country varchar(255), description varchar(255), duration varchar(255), genre varchar(255), motto varchar(255), name varchar(255), operator varchar(255), picture_url varchar(255), producer varchar(255), rating double precision not null, screenwriter varchar(255), year varchar(255), youtube_video_id varchar(255), primary key (id)) engine=MyISAM
create table hibernate_sequence (next_val bigint) engine=MyISAM
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
create table review (id bigint not null, film_id bigint, positive bit not null, rating double precision not null, review varchar(255), user_id bigint not null, primary key (id)) engine=MyISAM
create table role (id bigint not null auto_increment, name varchar(255), primary key (id)) engine=MyISAM
create table user (id bigint not null auto_increment, email varchar(255), password varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table users_roles (user_id bigint not null, role_id bigint not null) engine=MyISAM
alter table user add constraint UKob8kqyqqgmefl0aco34akdtpe unique (email)
alter table review add constraint FKiyf57dy48lyiftdrf7y87rnxi foreign key (user_id) references user (id)
alter table users_roles add constraint FKt4v0rrweyk393bdgt107vdx0x foreign key (role_id) references role (id)
alter table users_roles add constraint FKgd3iendaoyh04b95ykqise6qh foreign key (user_id) references user (id)
create table film (id bigint not null, dvd_release varchar(255), box_office varchar(255), budget varchar(255), composer varchar(255), country varchar(255), description varchar(255), duration varchar(255), genre varchar(255), motto varchar(255), name varchar(255), operator varchar(255), picture_url varchar(255), producer varchar(255), rating double precision not null, screenwriter varchar(255), year varchar(255), youtube_video_id varchar(255), primary key (id)) engine=MyISAM
create table hibernate_sequence (next_val bigint) engine=MyISAM
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
create table review (id bigint not null, film_id bigint, positive bit not null, rating double precision not null, review varchar(255), user_id bigint not null, primary key (id)) engine=MyISAM
create table role (id bigint not null auto_increment, name varchar(255), primary key (id)) engine=MyISAM
create table user (id bigint not null auto_increment, email varchar(255), password varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table users_roles (user_id bigint not null, role_id bigint not null) engine=MyISAM
alter table user add constraint UKob8kqyqqgmefl0aco34akdtpe unique (email)
alter table review add constraint FKiyf57dy48lyiftdrf7y87rnxi foreign key (user_id) references user (id)
alter table users_roles add constraint FKt4v0rrweyk393bdgt107vdx0x foreign key (role_id) references role (id)
alter table users_roles add constraint FKgd3iendaoyh04b95ykqise6qh foreign key (user_id) references user (id)
create table film (id bigint not null, dvd_release varchar(255), box_office varchar(255), budget varchar(255), composer varchar(255), country varchar(255), description varchar(255), duration varchar(255), genre varchar(255), motto varchar(255), name varchar(255), operator varchar(255), picture_url varchar(255), producer varchar(255), rating double precision not null, screenwriter varchar(255), year varchar(255), youtube_video_id varchar(255), primary key (id)) engine=MyISAM
create table hibernate_sequence (next_val bigint) engine=MyISAM
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
create table review (id bigint not null, film_id bigint, positive bit not null, rating double precision not null, review varchar(255), user_id bigint not null, primary key (id)) engine=MyISAM
create table role (id bigint not null auto_increment, name varchar(255), primary key (id)) engine=MyISAM
create table user (id bigint not null auto_increment, email varchar(255), password varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table users_roles (user_id bigint not null, role_id bigint not null) engine=MyISAM
alter table user add constraint UKob8kqyqqgmefl0aco34akdtpe unique (email)
alter table review add constraint FKiyf57dy48lyiftdrf7y87rnxi foreign key (user_id) references user (id)
alter table users_roles add constraint FKt4v0rrweyk393bdgt107vdx0x foreign key (role_id) references role (id)
alter table users_roles add constraint FKgd3iendaoyh04b95ykqise6qh foreign key (user_id) references user (id)
create table film (id bigint not null, dvd_release varchar(255), box_office varchar(255), budget varchar(255), composer varchar(255), country varchar(255), description varchar(255), duration varchar(255), genre varchar(255), motto varchar(255), name varchar(255), operator varchar(255), picture_url varchar(255), producer varchar(255), rating double precision not null, screenwriter varchar(255), year varchar(255), youtube_video_id varchar(255), primary key (id)) engine=MyISAM
create table hibernate_sequence (next_val bigint) engine=MyISAM
insert into hibernate_sequence values ( 1 )
insert into hibernate_sequence values ( 1 )
create table review (id bigint not null, film_id bigint, positive bit not null, rating double precision not null, review varchar(255), user_id bigint not null, primary key (id)) engine=MyISAM
create table role (id bigint not null auto_increment, name varchar(255), primary key (id)) engine=MyISAM
create table user (id bigint not null auto_increment, email varchar(255), password varchar(255), username varchar(255), primary key (id)) engine=MyISAM
create table users_roles (user_id bigint not null, role_id bigint not null) engine=MyISAM
alter table user add constraint UKob8kqyqqgmefl0aco34akdtpe unique (email)
alter table review add constraint FKiyf57dy48lyiftdrf7y87rnxi foreign key (user_id) references user (id)
alter table users_roles add constraint FKt4v0rrweyk393bdgt107vdx0x foreign key (role_id) references role (id)
alter table users_roles add constraint FKgd3iendaoyh04b95ykqise6qh foreign key (user_id) references user (id)
