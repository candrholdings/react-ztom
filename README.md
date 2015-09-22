# react-ztom
Simple and naive controls for ReactJS

## Calendar
### Sample JSX
``` html
<window.Ztom.Calendar date={new Date}>
    <span>Any children appears as header here</span>
</window.Ztom.Calendar>
```

### Props
Prop name         | Description
----------------- | -----------
`children`        | Elements to be added as header
`className`       | CSS class name for the DOM element
`date`            | Date the calendar should show, default is today
`onSelect(Date)`  | Called when a date is selected and `selectable` is set to `true`
`renderDay(Date)` | Custom renderer for day cell
`selectable`      | `true` if the day cell is selectable, otherwise, `false`
`selected`        | Selected cell, primarily add `selected` class to matching day cell
`today`           | Date of today, primarily add `today` class to matching day cell

### Rendered HTML
``` html
<div class="ztom-calendar">
    <div class="week">
        <button class="day sunday other-month">30</button>
        <button class="day monday other-month">31</button>
        <button class="day tuesday today">1</button>
        <button class="day wednesday selected">2</button>
        <button class="day thursday">3</button>
        <button class="day friday">4</button>
        <button class="day saturday">5</button>
    </div>
    ...
</div>
```
