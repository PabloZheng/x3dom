/** @namespace x3dom.nodeTypes */
/*
 * X3DOM JavaScript Library
 * http://www.x3dom.org
 *
 * (C)2009 Fraunhofer IGD, Darmstadt, Germany
 * Dual licensed under the MIT and GPL
 */

/* ### PopGeometryLevel ### */
x3dom.registerNodeType(
    "PopGeometryLevel",
    "Geometry3D",
    defineClass(x3dom.nodeTypes.X3DGeometricPropertyNode,
        
        /**
         * Constructor for PopGeometryLevel
         * @constructs x3dom.nodeTypes.PopGeometryLevel
         * @x3d x.x
         * @component Geometry3D
         * @status experimental
         * @extends x3dom.nodeTypes.X3DGeometricPropertyNode
         * @param {Object} [ctx=null] - context object, containing initial settings like namespace
         */
        function (ctx) {
            x3dom.nodeTypes.PopGeometryLevel.superClass.call(this, ctx);


            /**
             *
             * @var {x3dom.fields.SFString} src
             * @memberof x3dom.nodeTypes.PopGeometryLevel
             * @initvalue ""
             * @field x3dom
             * @instance
             */
            this.addField_SFString(ctx, 'src', "");

            /**
             *
             * @var {x3dom.fields.SFInt32} numIndices
             * @memberof x3dom.nodeTypes.PopGeometryLevel
             * @initvalue 0
             * @field x3dom
             * @instance
             */
            this.addField_SFInt32(ctx, 'numIndices', 0);

            /**
             *
             * @var {x3dom.fields.SFInt32} vertexDataBufferOffset
             * @memberof x3dom.nodeTypes.PopGeometryLevel
             * @initvalue 0
             * @field x3dom
             * @instance
             */
            this.addField_SFInt32(ctx, 'vertexDataBufferOffset', 0);
        
        },
        {
            getSrc: function () {
                return this._vf.src;
            },

            getNumIndices: function () {
                return this._vf.numIndices;
            },

            getVertexDataBufferOffset: function () {
                return this._vf.vertexDataBufferOffset;
            }
        }
    )
);