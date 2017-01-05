/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ClarityModule} from "../../clarity-angular";
import {ROUTING} from "./tree-view.demo.routing";

import {TreeViewDemo} from "./tree-view.demo";
import {TreeNodeBasicStructureDemo} from "./basic-tree-node/tree-node-basic";
import {TreeViewBasicStructureDemo} from "./basic-tree-view/tree-view-basic";
import {TreeViewDynamicDemo} from "./tree-view-dynamic/tree-view-dynamic";
import {TreeNodeLazyLoadingDemo} from "./lazy-loading/lazy-loading";
import {TreeNodeLabelChangeOnExpandDemo} from "./label-change-on-expand/label-change-on-expand";

@NgModule({
    imports: [
        CommonModule,
        ClarityModule,
        ROUTING
    ],
    declarations: [
        TreeViewDemo,
        TreeNodeBasicStructureDemo,
        TreeViewBasicStructureDemo,
        TreeViewDynamicDemo,
        TreeNodeLazyLoadingDemo,
        TreeNodeLabelChangeOnExpandDemo
    ],
    exports: [
        TreeViewDemo,
        TreeNodeBasicStructureDemo,
        TreeViewBasicStructureDemo,
        TreeViewDynamicDemo,
        TreeNodeLazyLoadingDemo,
        TreeNodeLabelChangeOnExpandDemo
    ]
})
export default class TooltipsDemoModule {
}
