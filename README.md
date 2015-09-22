# react-ztom
Simple and naive controls for ReactJS.

These controls are built with extreme simplicity in mind. It does not come with any styles for cosmetic purpose. Stylesheet included are very limited and only to make these controls usable.

## Calendar (month view)

### Target scenarios

* Appointment view
* Base of a custom date picker
  * Date picker should be provided by user agent, try very best not to use this component to build another date picker

For localizability, we do not add weekday names (Sunday to Saturday) to the header.

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

### Roadmap

Features to be implemented:
* Monday as first of week
* Show only work days
* Always show 6 rows of weeks
  * Calendar of 2015 February only fit on 4 rows

Other view of calendar (year, day, agenda) should be implemented separately.
