/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
    AfterContentInit,
    Component,
    ContentChildren,
    EventEmitter,
    Input,
    Output,
    QueryList,
    Optional,
    trigger
} from "@angular/core";

import {TreeView} from "./tree-view";

import {collapse} from "../animations/collapse/index";

@Component({
    selector: "clr-tree-node",
    templateUrl: "./tree-node.html",
    animations: [trigger("collapse", collapse())]
})
export class TreeNode implements AfterContentInit {

    @ContentChildren(TreeNode) childNodes: QueryList<TreeNode>;

    @Input("clrTreeNodeExpanded") expanded = false;
    @Output("clrTreeNodeExpandedChange") expandedChange: EventEmitter<boolean>
        = new EventEmitter<boolean>(false);

    @Input("clrTreeNodeExpandable") isExpandable = false;
    @Input("clrTreeNodeLoading") loading = false;

    @Input("clrTreeNodeSelected") selected: boolean = false;

    private _isSelectable: boolean = false;

    constructor( @Optional() private tree: TreeView) {
    }

    hasChildren: boolean = false;
    caretDirection: string = this.expanded ? "down" : "right";

    toggleCollapse(): void {
        this.expanded = !this.expanded;
        this.toggleDirection();
        this.expandedChange.emit(this.expanded);
    }

    toggleDirection(): void {
        this.caretDirection = this.expanded ? "down" : "right";
    }

    ngAfterContentInit() {
        if (this.tree && this.tree.isSelectable) {
            this._isSelectable = true;
        }
        this.hasChildren = this.treeNodeHasChildren();
    }

    treeNodeHasChildren(): boolean {
        //Since @ContentChildren registers itself as a child too,
        //we check for length > 1 instead of 0
        if (this.childNodes.length > 1) {
            return true;
        }
        return false;
    }

    onSelectedChange(): void {
        this.selected = !this.selected;
        this.refreshChildrenSelection(this);
        this.refreshParentSelection();
    }

    refreshChildrenSelection(treeNode: TreeNode): void {
        console.log("children selection refreshed");
    }

    refreshParentSelection(): void {
        console.log("parent selection refreshed");
    }

}
