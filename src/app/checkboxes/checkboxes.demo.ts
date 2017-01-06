/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "clr-checkboxes-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["./checkboxes.demo.css"],
    templateUrl: "./checkboxes.demo.html"
})

export class CheckboxesDemo {

    indeterminateState: boolean = true;

    onToggleIndeterminateState() {
        this.indeterminateState = !this.indeterminateState;
    }

    onChange(value: boolean): void {
        console.log("onChange value received: "+ value);
        this.indeterminateState = value;
    }
}
