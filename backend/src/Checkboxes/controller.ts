
import { JsonController, Get, Post,HttpCode, Param, Put, Body, NotFoundError } from 'routing-controllers'
import Checkbox from './entity'

@JsonController()
export default class checkboxController {

  @Get('/checkboxes/:id')
  getcheckbox(
  @Param('id') id: number
  ) {
  return Checkbox.findOne(id)
  }

  @Get('/checkboxes')
  async allcheckboxes() {
  const checkboxes = await Checkbox.find()
  return { checkboxes }
  }

  @Put('/checkboxes/:id')
  async updatecheckbox(
  @Param('id') id: number,
  @Body() update: Partial<Checkbox>
  ) {
  const checkbox = await Checkbox.findOne(id)
  if (!checkbox) throw new NotFoundError('Cannot find checkbox')

  return Checkbox.merge(checkbox, update).save()
  }

  @Post('/checkboxes')
  @HttpCode(201)
  createcheckbox(
      @Body() body: Checkbox
  ): Checkbox {
      console.log(`Incoming POST body param:`, body)
      return body
  }

}
