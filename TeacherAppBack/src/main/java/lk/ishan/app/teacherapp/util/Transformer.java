package lk.ishan.app.teacherapp.util;

import lk.ishan.app.teacherapp.entity.Teacher;
import lk.ishan.app.teacherapp.to.TeacherReqTo;
import lk.ishan.app.teacherapp.to.TeacherTo;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class Transformer {

    private final ModelMapper modelMapper;

    public List<TeacherTo> toTeacherTos(List<Teacher> teacherList){
        return teacherList.stream().map(teacher -> modelMapper.map(teacher, TeacherTo.class)).collect(Collectors.toList());
    }
    public Teacher fromTeacherReqTo(TeacherReqTo teacherReqTo){
        return modelMapper.map(teacherReqTo, Teacher.class);
    }
    public TeacherTo toTeacherTo(Teacher teacher){
        return modelMapper.map(teacher, TeacherTo.class);
    }

}
