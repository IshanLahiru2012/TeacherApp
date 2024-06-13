package lk.ishan.app.teacherapp.service;

import lk.ishan.app.teacherapp.entity.Teacher;
import lk.ishan.app.teacherapp.repository.TeacherRepository;
import lk.ishan.app.teacherapp.to.TeacherReqTo;
import lk.ishan.app.teacherapp.to.TeacherTo;
import lk.ishan.app.teacherapp.util.Transformer;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TeacherServiceImpl implements TeacherService{

    private final TeacherRepository teacherRepository;
    private final Transformer transformer;


    @Override
    public TeacherTo saveTeacher(TeacherReqTo teacherReqTo) {
        Teacher teacher = transformer.fromTeacherReqTo(teacherReqTo);
        teacherRepository.save(teacher);
        TeacherTo teacherTo = transformer.toTeacherTo(teacher);
        return teacherTo;
    }

    @Override
    public List<TeacherTo> getTeachers() {
        List<Teacher> teacherList = teacherRepository.findAll();
        List<TeacherTo> teacherTos = transformer.toTeacherTos(teacherList);
        return teacherTos;
    }
}
