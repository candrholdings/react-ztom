!function (Ztom, React) {
    'use strict';

    var {PropTypes} = React,
        weekdayClassNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    Ztom.Calendar = React.createClass({
        propTypes: {
            date: PropTypes.instanceOf(Date),
            onSelect: PropTypes.func,
            renderDay: PropTypes.func,
            selectable: PropTypes.bool,
            selected: PropTypes.instanceOf(Date),
            today: PropTypes.instanceOf(Date)
        },
        getDefaultProps: function () {
            return {
                date: new Date(),
                renderDay: function (date) {
                    return (
                        <div>{date.getDate()}</div>
                    );
                },
                selectable: true,
                today: new Date()
            };
        },
        onDayClick: function (date) {
            var handler = this.props.onSelect;

            handler && handler(date);
        },
        render: function () {
            var that = this,
                {props, state} = that,
                {className, date, renderDay, selectable, selected, today} = props,
                classNames = ['ztom-calendar'],
                month = date.getMonth(),
                todayTime = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime(),
                selectedDay = selected && new Date(selected.getFullYear(), selected.getMonth(), selected.getDate()).getTime(),
                first = getFirstDateOfCalendar(date).getTime(),
                last = getLastDateOfCalendar(date).getTime(),
                current = first,
                weeks = [],
                week;

            className && classNames.push(className);
            last = Math.max(first, last);

            for (; current < last; current += 864e+5) {
                if (!week) {
                    weeks.push((week = []));
                }

                week.push(new Date(current));

                if (week.length > 6) {
                    week = 0;
                }
            }

            return (
                <div className={classNames.join(' ')}>
                    {props.children}
                    {
                        weeks.map((week, weekIndex) => {
                            return (
                                <div className="week" key={weekIndex}>
                                {
                                    week.map((date, dateIndex) => {
                                        var classNames = ['day', weekdayClassNames[date.getDay()]],
                                            time = date.getTime(),
                                            rendered = renderDay ? renderDay(date) : date.getDate();

                                        date.getMonth() !== month && classNames.push('other-month');
                                        time === todayTime && classNames.push('today');
                                        time === selectedDay && classNames.push('active');
                                        classNames = classNames.join(' ');

                                        return (
                                            selectable ?
                                                <button className={classNames} onClick={that.onDayClick.bind(null, date)} key={dateIndex}>{rendered}</button>
                                            :
                                                <div className={classNames} key={dateIndex}>{rendered}</div>
                                        );
                                    })
                                }
                                </div>
                            );
                        })
                    }
                </div>
            );
        },
    });

    function getFirstDateOfCalendar(date) {
        var year = date.getFullYear(),
            month = date.getMonth(),
            firstDayOfMonth = new Date(year, month, 1);

        return new Date(year, month, 1 - firstDayOfMonth.getDay());
    }

    function getLastDateOfCalendar(date) {
        var year = date.getFullYear(),
            month = date.getMonth(),
            lastDayOfMonth = new Date(year, month + 1, 0);

        return new Date(year, month, lastDayOfMonth.getDate() + 7 - lastDayOfMonth.getDay());
    }
}(window.Ztom || (window.Ztom = {}), window.React);