import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CounterComponent } from './components/counter/counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  HeaderComponent, CounterComponent],
  // templateUrl: './app.component.html',
  template: `
    <app-header />

    <main
      class="p-3 bg-gray-300 h-screen m-3 shadow-lg rounded-2xl flex justify-center items-center"
    >
      <!-- <div class="rounded-2xl bg-gray-50 shadow-lg p-3 md:w-1/2 w-full">
        <button (click)="generateFunc()"  type="button" title="Generate Advice" class="metal mx-auto lg:w-32 block ">
          <span class="text">Generate</span>
        </button>
      </div> -->
      <app-counter />
    </main>
    <router-outlet>
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Learn Angular 2025';

  // async generateFunc(): Promise<void> {
  //   try {
  //     const response = await fetch('https://zenquotes.io/api/random')
  //     console.log("🚀 ~ AppComponent ~ generateFunc ~ response:", response)
  //     const res = await response.json();
  //     console.log("🚀 ~ AppComponent ~ generateFunc ~ res:", res)
  //     // console.log("🚀 ~ Advice:", slip);
  //   } catch (error) {
  //     console.error('Error fetching advice:', error);
  //   }
  // }
}
