/* Copyright (c) 2010, Sage Software, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

Ext.namespace('Sage.Platform.Mobile.Controls');

(function() {
    Sage.Platform.Mobile.Controls.TextAreaField = Ext.extend(Sage.Platform.Mobile.Controls.TextField, {        
        rows: 4,
        enableClearButton: false,
        template: new Simplate([
            '<label for="{%= $.name %}">{%: $.label %}</label>',
            '<textarea name="{%= $.name %}" rows="{%: $.rows %}" {% if ($.readonly) { %} readonly {% } %} />'
        ])
    });
    Sage.Platform.Mobile.Controls.FieldManager.register('textarea', Sage.Platform.Mobile.Controls.TextAreaField);
})();