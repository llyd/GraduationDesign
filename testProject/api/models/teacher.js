//teachers教师
//teacherId:教工号
//teacherName:教师姓名
//teacherSex:性别
//teacherTitle:职称
//workload:预定工作量
//residualWorkload剩余工作量
//courseId:可授课课程id
//courseName:可授课课程名称
//课程标志
//idleTime:空闲时间段[]
module.exports = {
	attributes:{
		teacherId: {
			type: 'int'
		},
		teacherName: {
			type: 'string'
		},
		teacherSex: {
			type: 'string'
		},
		teacherTitle: {
			type: 'string'
		}
		workload: {
			type: 'int'
		}
		residualWorkload: {
			type: 'int'
		}
		courseId: {
			type: 'string'
		}
		courseName: {
			type: 'string'
		},
		idleTime: {
			type: 'string'			
		}
	}
}

// module.exports = {
//   attributes: {
//     // e.g., "Polly"
//     name: {
//       type: 'string'
//     },

//     // e.g., 3.26
//     wingspan: {
//       type: 'float',
//       required: true
//     },

//     // e.g., "cm"
//     wingspanUnits: {
//       type: 'string',
//       enum: ['cm', 'in', 'm', 'mm'],
//       defaultsTo: 'cm'
//     },

//     // e.g., [{...}, {...}, ...]
//     knownDialects: {
//       collection: 'Dialect'
//     }
//   }
// }
