import { Args, Command } from '@oclif/core'

export default class SayBye extends Command {
  static description = 'Say goodbye to someone.'

  static args = {
    name: Args.string({ required: true, description: 'Name of the person to bid farewell' }),
  }

  async run() {
    const { args } = await this.parse(SayBye)
    this.log(`Goodbye, ${args.name}! 👋`)
  }
}
