import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
  JoinColumn,
  JoinTable,
  Relation,
} from 'typeorm';
import { Review } from './Review';
import { Author } from './Author';

@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  bookId: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  dateOfPublication: string;

  @Column({ default: false })
  publicDomain: boolean;

  @OneToMany(() => Review, (reviews) => reviews.book)
  @JoinColumn() // optional for @ManyToOne(@OneToMany), required for @OneToOne
  reviews: Relation<Review>[];

  @ManyToMany(() => Author, (authors) => authors.books, { cascade: ['insert', 'update'] })
  @JoinTable()
  authors: Relation<Author>[];
}
