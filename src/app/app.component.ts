import { Component, HostListener } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'startup-landing-pad';
  activeSection: string = 'splashscreen';

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this.activeSection = sectionId;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const sections = ['splashscreen', 'description', 'the-works', 'game-engine', 'future-projects', 'contact'];
    const scrollPosition = window.scrollY + 100; // Offset for better detection

    let currentSection = this.activeSection;
    let minDistance = Infinity;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        const offsetTop = rect.top + window.scrollY;
        const offsetBottom = offsetTop + rect.height;
        
        // Calculate distance from current scroll position to section
        const distance = Math.abs(scrollPosition - offsetTop);
        
        // If we're within the section's boundaries
        if (scrollPosition >= offsetTop && scrollPosition <= offsetBottom) {
          currentSection = section;
          break;
        }
        // If we're not within any section, find the closest one
        else if (distance < minDistance) {
          minDistance = distance;
          currentSection = section;
        }
      }
    }

    if (currentSection !== this.activeSection) {
      this.activeSection = currentSection;
    }
  }
}
