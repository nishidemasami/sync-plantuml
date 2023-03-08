# plantuml

Convert [PlantUML] diagram text to SVG with plantuml.jar.

> Using PlantUML MIT Version 1.2023.2 plantuml.jar

## Installation

```bash
$ npm install sync-plantuml
```

## Dependencies

Requires java to be installed on the system.

## Usage

```js
import { plantuml } from 'sync-plantuml';

const svg = plantuml(`
  @startuml
  Bob -> Alice : hello
  Alice -> Wonderland: hello
  Wonderland -> next: hello
  next -> Last: hello
  Last -> next: hello
  next -> Wonderland : hello
  Wonderland -> Alice : hello
  Alice -> Bob: hello
  @enduml
`);

require('fs').writeFileSync('image.svg', svg);
```

## License

MIT

[PlantUML]: https://plantuml.com