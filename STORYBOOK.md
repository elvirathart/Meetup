## Storybook Intro

Welkom bij tweede Meetup van SmartQA.

Deze meetup gaat over Storybook. We gaan de basis van Storybook door, hoe het werkt, hoe tests te schrijven en daarna gaan we jullie aan het werk zetten.

Eerst.
De testing pyramid - de meesten van jullie die wat dan ook met testen ooit hebben gedaan, hebben deze vast al veel te vaak gezien.

Ik laat het nu nog een keer zien, want het is heel relevant als je aan een project begint en keuzes moet maken over wat je waar en hoe gaat testen.
Hiermee wil ik laten zien waar storybook in dit verhaal past en waarom je hiervoor zou (moeten) kiezen.

Web Automation tests - traag en is een investering. Kosten relatief veel tijd om te maken, te onderhouden. Ze zijn duur. Tegelijkertijd zijn ze wel waardevol, omdat ze vanuit het perspectief van de gebruiker testen. Je wilt hier vooral de de belangrijkste flows testen.

Integratie tests - waardevol, maar wat houdt het in?

Unit tests - 

Testing trophy explanation


Show where in testing trophy / level of testing Storybook belongs

Waarom Storybook?
Frontend is complex. Responsive web design, devices, browsers, accesibility, performance, async states... 
React en Vue o.a. zijn gefocust op components om dit soort complexe user interfaces te versimpelen.
Nog steeds heb je echter te maken met allerlei business logic, interactive states en app context.

Storybook leeft naast je app en geeft de optie om UIs in isolatie te bouwen. Elk stukje UI is nu een component.
Voor components hoef je niet een hele app te runnen om te zien hoe ze renderen. Je kan een specifieke variatie in isolatie renderen door het meegeven van props, mocking van data of nabootsen van events.


Advantages of storybook in comparison with web automation + unit tests / testing library

example web automation

example testing library 

example Storybook 


## How does it work?

Hoe werkt/hoe gebruik je Storybook?
Storybook werkt met stories. Wat is een Story?
Story= een gerenderde state van een UI component.
Story = component with a set of arguments that define how the component should render.
Args are Storybooks way for defining those arguments in a single javascript object.
Args can be used to dynamically change props, slots, styles, inputs etc.
It allows SB and its addons to live edit components - without needing to nodify your underlying component code to use args.

Voor een component kun je meerdere stories schrijven - alle boeiende states die een component ondersteunt.




Toevoegen uitleg of in tests: args, parameters, actions, mocking data en modules, stories for multiple components?