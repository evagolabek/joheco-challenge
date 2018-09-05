
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'

@Entity()
export default class Checkbox extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('bool', {nullable:false})
  value: boolean
}
