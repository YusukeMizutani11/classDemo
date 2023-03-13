import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, Relation } from 'typeorm';
import { Book } from './Book';

@Entity()
export class Author {
  @PrimaryGeneratedColumn('uuid')
  authorId: string;

  @Column()
  authorName: string;

  @Column({ default: 'unknown' })
  countryOfOrigin: string;

  @ManyToMany(() => Book, (books) => books.authors, { cascade: ['insert', 'update'] })
  books: Relation<Book>[];
}
