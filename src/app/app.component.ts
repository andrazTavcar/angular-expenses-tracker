import { Component } from '@angular/core';

import { createWorker } from 'tesseract.js';
import { RouterOutlet } from '@angular/router';

(async () => {
  const worker = await createWorker('eng');
  const ret = await worker.recognize('https://i.postimg.cc/RCyW752Z/lidl-ra-un.jpg');
  console.log(ret.data.text);
  await worker.terminate();
})();


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [RouterOutlet]
})
export class AppComponent {
  title = 'angular-expenses-tracker';

}

