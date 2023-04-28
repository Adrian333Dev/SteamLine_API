import { UserEntity } from 'src/resources/users/entities/user.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'files' })
export class FileEntity {
  @PrimaryGeneratedColumn({ name: 'file_id' })
  fileId: number;

  @Column({ name: 'file_name', nullable: false })
  fileName: string;

  @Column({ name: 'file_path', nullable: false })
  originalName: string;

  @Column({ nullable: false })
  size: number;

  @Column({ nullable: false })
  mimetype: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  // Relations

  @ManyToOne(() => UserEntity, (user) => user.files)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
