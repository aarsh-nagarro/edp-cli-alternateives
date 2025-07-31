# edp_cli_click.py

import click

@click.group()
def cli():
    """EDP CLI"""
    pass

@cli.command(name="say-hello")
@click.option('--name', required=True, help='Name of the person to greet')
def say_hello(name):
    """Greet someone with hello."""
    click.echo(f"Hello, {name}! 👋")

@cli.command(name="say-bye")
@click.option('--name', required=True, help='Name of the person to bid farewell')
def say_bye(name):
    """Say goodbye to someone."""
    click.echo(f"Goodbye, {name}! 👋")

if __name__ == '__main__':
    cli()
