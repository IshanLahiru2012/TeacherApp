package lk.ishan.app.teacherapp.service;

import lk.ishan.app.teacherapp.to.TeacherReqTo;
import lk.ishan.app.teacherapp.to.TeacherTo;
import org.springframework.stereotype.Service;

import java.util.List;


public interface TeacherService {

    TeacherTo saveTeacher(TeacherReqTo teacherReqTo);

    List<TeacherTo> getTeachers();
}
