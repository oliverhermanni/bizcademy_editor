<?php
$f3->route('POST /addmodule', function($f3) {
    $request = $f3->get('BODY');
    $module = json_decode($request);
    $sql = "INSERT INTO modules (chapter_id, module_type, title, summary, advice, theme, answers, hints ) VALUES (:chapter_id, :module_type, :title, :summary, :advice, :theme, :answers, :hints)";
    $empty_string = '';
    $empty_data = serialize([]);
    try {

        $db = getConnection();
        $stmt = $db->prepare($sql);

        $stmt->bindParam("chapter_id", $module->chapter_id);
        $stmt->bindParam("module_type", $module->module_type);
        $stmt->bindParam("title", $module->title);
        $stmt->bindParam("summary", $module->summary);

        switch ($module->module_type) {
            case "text":
                $stmt->bindParam("advice", $empty_string);
                $stmt->bindParam("theme", $empty_string);
                $stmt->bindParam("answers", $empty_data);
                $stmt->bindParam("hints", $empty_data);
                break;
            case "quiz":
                $stmt->bindParam("advice", $module->advice);
                $stmt->bindParam("theme", $module->theme);
                $answers = serialize($module->answers);
                $stmt->bindParam("answers", $answers);
                $hints = serialize($module->hints);
                $stmt->bindParam("hints", $hints);
                break;
        }
        $stmt->execute();
        $module->id = $db->lastInsertId();
        $db = null;
        echo json_encode($module);
    } catch (PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
});

$f3->route('GET /getmodules/@chapter_id', function($f3, $params) {
    $sql = "SELECT * FROM `modules` WHERE `chapter_id` = :chapter_id ";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $stmt->execute(array(':chapter_id' => $params['chapter_id']));
        $modules = $stmt->fetchAll();
        echo json_encode($modules);
    } catch (PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
});

$f3->route('GET /getmodule/@moduleid', function($f3, $params) {
    $sql = "SELECT * FROM `modules` WHERE `id` = :id";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $stmt->execute(array(':id' => $params['moduleid']));
        $module = $stmt->fetch();
        $module['answers'] = unserialize($module['answers']);
        $module['hints'] = unserialize($module['hints']);
        echo json_encode($module);
    } catch (PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
});

$f3->route('DELETE /deletemodule/@module_id', function($f3, $params) {
    $sql = "DELETE FROM `modules` WHERE `id` = :id";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $count = $stmt->execute(array(':id' => $params['module_id']));
        echo json_encode($count);
    } catch (PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
});

$f3->route('POST /updatemodule/@moduleId', function($f3, $params) {
    $request = $f3->get('BODY');
    $module = json_decode($request);
    $sql = "UPDATE modules SET `chapter_id` = :chapter_id, `module_type` = :module_type, `title` = :title, `summary` = :summary, `advice` = :advice, `theme` = :theme, `answers` = :answers, `hints` = :hints  WHERE `id` = :id ";
    $empty_string = '';
    $empty_data = serialize([]);
    try {

        $db = getConnection();
        $stmt = $db->prepare($sql);

        $stmt->bindParam("id", $params['moduleId']);
        $stmt->bindParam("chapter_id", $module->chapter_id);
        $stmt->bindParam("module_type", $module->module_type);
        $stmt->bindParam("title", $module->title);
        $stmt->bindParam("summary", $module->summary);

        switch ($module->module_type) {
            case "text":
                $stmt->bindParam("advice", $empty_string);
                $stmt->bindParam("theme", $empty_string);
                $stmt->bindParam("answers", $empty_data);
                $stmt->bindParam("hints", $empty_data);
                break;
            case "quiz":
                $stmt->bindParam("advice", $module->advice);
                $stmt->bindParam("theme", $module->theme);
                $answers = serialize($module->answers);
                $stmt->bindParam("answers", $answers);
                $hints = serialize($module->hints);
                $stmt->bindParam("hints", $hints);
                break;
        }
        $stmt->execute();
        $db = null;
        echo json_encode($module);
    } catch (PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
});
