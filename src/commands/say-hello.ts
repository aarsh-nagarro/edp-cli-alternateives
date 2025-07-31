import { Args, Command } from '@oclif/core'

export default class SayHello extends Command {
  static description = 'Greet someone with hello.'

  static args = {
    name: Args.string({ required: true, description: 'Name of the person to greet' }),
  }

  async run() {
    const { args } = await this.parse(SayHello)
    this.log(`Hello, ${args.name}! 👋`)
  }
}
