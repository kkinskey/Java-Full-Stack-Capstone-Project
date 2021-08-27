//package com.claim.entity;
//
//import com.claim.repository.ImageRepository;
//import com.claim.SpringbootFileUpload.Model.MyModel;
//import java.util.Optional;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.dao.support.DaoSupport;
//import org.springframework.stereotype.Service;
//
///**
// *
// * @author Vasu Rajput
// */
//@Service
//public class MyService {
//
//    private static final Logger logger = LoggerFactory.getLogger("MyService.class");
//    @Autowired
//    private ImageRepository imageRepository;
//
//    public int saveImage(MyModel model) {
//        try {
//        	imageRepository.save(model);
//            return 1;
//        } catch (Exception e) {
//            logger.error("ERROR", e);
//            return 0;
//        }
//    }
//
//    public MyModel getImages(Long id) {
//        Optional findById = imageRepository.findById(id);
//        if (findById.isPresent()) {
//            MyModel getImageDetails = (MyModel) findById.get();
//            logger.info("id= " + getImageDetails.getId() + " name= " + getImageDetails.getName());
//            return getImageDetails;
//        } else {
//            return null;
//        }
//    }
//}
//
